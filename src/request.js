import 'whatwg-fetch';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0ODA0MjczMDMsImVtYWlsIjoibWFuYWdlckBleGFtcGxlLmNvbSIsImxhc3RfbmFtZSI6IkVtbWVyaWNoIiwiZmlyc3RfbmFtZSI6IkZyZWRlcmljIiwic3ViIjoxfQ.mGPHjVT5KE7xadVu9Ooog4J4cbHnRKrTtHUds1rupLk';
    const userToken = TOKEN;
    let opts = options || {};
    if (userToken) {
        opts = {
            ...opts,
            headers: {
                ...opts.headers,
                Authorization: `Bearer ${userToken}`,
            },
        };
    }
    /* global __APP_CONFIG__ */
    const baseUrl = 'http://128.199.83.242/';
    const requestUrl = `${baseUrl}${url}`;
    return fetch(requestUrl, opts)
        .then((response) => {
            const { statusText } = response;
            return response.json()
                .then((json) => {
                    if (response.ok) {
                        return { data: json };
                    }
                    return { err: { response, json: { ...json, statusText } } };
                })
                .catch(() => ({ err: { response, json: { statusText } } }));
        });
}
