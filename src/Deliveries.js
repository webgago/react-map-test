import React from 'react';
import {CircleMarker} from 'react-leaflet'
import 'leaflet-routing-machine';
import L from 'leaflet';
L.Icon.Default.mergeOptions({
    iconUrl:       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
    iconRetinaUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7c3grY3grg8hJo3grY4g7c4g7c3grU0gLI4grY9hrpBi79HkMM2frE0daA0fq82gbROlslbo9Vgp9dcpNZQmcxFjsIwd6QzeKk3gbRfptdepdZcpdY2gLMtd5s3gLNZotVSntNPnNJLmtFImdBZodU1f7A2f7A1frA2f7I2f7FHmNBUnM9Wn9VGmNAydaNYoNJOm9M9hLc0e6w3fa46f7BKmdFFltBVndE1fK1Els82fq41fK1Dlc89g7RClc9XoNVUndQ0eqxClM9Jl9FRms81eqo0eqpHltFBk89Fi75Qm9M/k89KkcYzealSjbadvdPH2ufz9/r4+vzP3+qlxNljmL08gLNSnNQzeKgydqUzeKg/ks6NtM/////+/v8+kc/f6fFAgK1CiLwydKIzd6c8kM6Tt9C1zd5OmdNBh7pTjLRzn78xdKIydqU7j86jwdbM3egxdKIydaQydaMydKNGlNE6js5OiLAxc6FKkshDk9E5jc09e6Zekrcxc6I4jc03eagyc6FIldI3jM0wcaBMl9J+psNKltIwcZ82i83k7fMubJhLlc81is1Lg6pklbZNl9I/j9AvbJlEjcVdkLPt8/cwcZ4ubZkwcJ00icy0y9swcJwvb5wzicxHkcpTh60ubZhCkNAyiMwvbpoxh8xAicBHj8hGk9FHks0+jdAubJcubJdEkdEwhsw6i88ubJgta5cvhswxapgubJcuhcstbJcubZcuhMsubJcvbJZBjMgthMsubJcvbZkubJcrg8stbJctbZcubJgrgssua5gubJc6is8qgcs8i9A9iMYtg8spgcoogMo7hcMrbZcubJcngMonf8olfsoubJc4gr8kfckua5g5iM8jfMk4iM8he8k1froua5g7itAgeskubJc2hs8eecgzfLcofssdeMg0hc4ubJccd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqjbZ8obAAAA7HRSTlMAHDdTb4yPA+L/7ZxE/////yYLgvb///////8SYf/////qB/////////+1wNHd//////8s////r/////////+O/P///////////8f///////////////////////+P2P///////////3f//////////5j/////tczn//////L///////////////////////8+////////R/////Ww////tf////9q////////////4P/////Yd/8W+P/xov+UNv///STN/7hc1P/AUv//////////MMT///+m//+e//////+M//+C////////6cqo94AAAAXmSURBVHgBrNKDoipBGADgbHMRpjuKi2xOdu//MHe2Y6tvOdZvuhGzxWqzO2xWi9lp+g6L3eV+5PH6vmpltrv8nDsQDIWCAbef83jDpo9FojFeJxhPJO8JosQzYnb5oxYpVzodiCcyhiwA2esPEAPpdM727vT+eSH0x7McwoTmOUpxIcvF/RAWI29byCUIpUQ2m8A0/xwx8kIQls2vW4QrihIHQMDqGyQBgAiVnOXVTuWUtAaAnq++I48B0PxKrPZiq8qKvy4IpPqBhiDUm0rl+ca12h1NQN3eh7pI6MN26WnfooNBPIHU4SdUlBAHg9Hj0seDEEJ08pxKqfoio4tQaDAOP0xrMEWIzB4NCWaIK8xJ7ymXItQcFO/jcLGIF+bLRytW4LS18Wbd5SNcEBcLn8mw2TYZ2+3vLRuMaYdme7sdTA8iY8flQ0mPscC2fB1ku12z4+necs7YebDlri9JZ3rvoazB1tutxdiuy1TXl4/Zer95ufzneq7524qBAIBr61TmtxXX/MK4FC6cKIwvViozXMDMzLbCTF+1JBn/4/EtLi2vrK6tbywsbE506vVxnZ3fF7YIIQamdX7dVqb/RtnCr1X+n3F9gA2MdA7Vsl87nzEDId2MTUCHSdr+As/Y1DKvM1uYFWBGpTtggrFuYrMPApgc0jhMTNmdvInLbn8NqNImgEG7jWzZnwB1KAg79t1V3mzPvgm6Q+n9m98n/e5ZQI+iw6Dby1v43AzApPIIs24/Cbg1GFcRE+h29xpvseJ2v4cxjzQOmjtAgqF5PRyRZvTXIfcqbxUNPdOnI1JYnw8FSSwUp4mklKDzoRRvkw7N0vF6QTwUI4aMRsNZyUQnMhkzb2HMZeJ0RhUMUy1jIP68lRaKUpLSXN7FW5jz+QnqKEoFas37yX6pD8tFpYybpQpv4S3lEGv5KvaV9olNDPwNHUhh1ETex5scpsQOVg8UxAFhI0dCHKPjRIogDorT1aZPzkTuHC9U2oPnQlySRzFxhYkTJYHHIXFt5srNnhBxLDSyV+L2IyF395vnhQflpHCuifv80g3/a+UPIXWNEDEAQEE0HR23weEk6XGnwR1iH3eJu7udbt26fe30I17x/PYH+9iv+CB5qT1v+YhlL5WeS5ZV72RZftvlNF6Wj75Zdn2kHcl6e5Sy/A3D7DsBMP0gd/DkC/Bp9l3gW5Y7a5asWVCm3WcaAFSHnFtxAXivwwAsWf9E25dl+TiwhwIKPVRgD33Ct6wvom0ijKapOBllpkEcf6ZCMsqjyCgjuvKIoajXYgya8vhIJ7rKKnKOP+sxjOPJZmV0DRRHGIZx/KW6npaOvor3M/G+pqalS00TT5q4G7qzPGe4O+wu7mxw59wt8p3LCre//pn/J+iupIwe1HKcpVdXI8c9QB9l9QMDnHVQF8+9xdAw5YzgBmfuHdVh4bj7GKO8cZYxW/UmvHkAeEl5pgncMJt7JzVZzOYaTFGh6WRGEDVJ5pniCDOCWw0Ns3MaLA0NdRijYm+AmQZhXoO1YQFYpBJLqGloGF1W1ZuMfKRSL1OZFVXJyNBlUhhD7evXk6sqZl+/rscaKfUDC68FtYn19Xr64xU+oo7nxQ2FWZ6vxyapuTyEdV5WTgR+HZ3DpGoN9Szzu8Qkzz9CH6kbZhlpa7uELO2gs4I0bOKRJInFC1GyPsMuaanoxPre1n6hbXlvB90dpKkPj4Q9sXAi7gnfcEDaOjqxIxwe5e1vCcforiIdu/gkyyenOSeyrBthqrpxvHV2lF0cHW4d47ySdB3g29bWiSPjZMvZBDvpqzxPZk7Ti9PDLZcyomBHk/PwxJ1ycsgiv4guzrgOz9wexn126EVbNV3oVzLj8zBaEYXqNnjP/G4W8Z8F0GYiKisTPGMZ31kQGKdymGwIhMIeTzgUgM1EZRkHgmGfL8wi01Qe0wQCYSaAESrXNBCJRiN6EYURxKLRmF5E4Q0QjwNvyIAlJBKYIiNegnlJhowBY2RMP9BPBn38SEYtLpKG/+tgQe8M5cY7AAAAAElFTkSuQmCC',
    shadowUrl:     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC'
});

delete L.Icon.Default.prototype._getIconUrl;

export default class Deliveries extends React.Component {
    constructor(props) {
        super(props);
        this.opacities = {};
    }

    render() {
        return (
            <div>{this.props.deliveries.map(delivery => delivery.steps.map(step => this.renderMarker(delivery, step)))}</div>
        );
    }

    onClick(delivery) {
        if (this.routing) {
            this.routing.remove()
        }
        this.routing = L.Routing.control({
            position: null,
            fitSelectedRoutes: true,
            plan: new L.Routing.Plan(delivery.steps.map((step) => this.buildWaypoint(step)), {
                createMarker: (i, waypoint, n) => {
                    var options = {
                            draggable: this.draggableWaypoints,
                            icon: L.divIcon({html: i+1, className: 'route-num'})
                        },
                        marker = L.marker(waypoint.latLng, options);
                    marker.bindPopup(`#${i + 1} ${waypoint.step.type} ${waypoint.name}`);
                    return marker;
                }
            }),
            lineOptions: {
                addWaypoints: false,
                styles: [
                    {color: 'black', opacity: 0.15, weight: 9},
                    {color: 'white', opacity: 0.8, weight: 6},
                    {color: '#3388ff', opacity: 1, weight: 2}
                ]
            }
        });
        this.routing.addTo(this.props.map);
    }

    buildWaypoint = (step) => {
        const wp = new L.Routing.Waypoint(L.latLng(step.address.latitude, step.address.longitude), step.address.address);
        wp.step = step;
        return wp;
    }

    renderMarker(delivery, step) {
        return (
            <CircleMarker key={step.id} onClick={() => this.onClick(delivery)}
                          center={[step.address.latitude, step.address.longitude]} radius={7} color='#ff8833'
                          fillOpacity={1} opacity={1} weight={1}>
            </CircleMarker>
        )
    }
}