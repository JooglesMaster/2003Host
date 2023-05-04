import React,{useState,useEffect} from 'react'
import rawData from "../mock-data.json"
import { Navigate, useParams } from 'react-router-dom'
import "../CSS/BoatId.css"
import payments from "../payments"
import paymentFunctions from "../StripeTest"
import Carousel from 'react-bootstrap/Carousel';




export default function BoatId (){

    let {id} = useParams()

    let newNum = Number(id)
    let data = rawData.find(item => item.id === newNum);

    

    const handlePayment = async () => {   
            window.location.href = `https://checkout.stripe.com/pay/`
    };

      
    return (
        <div class="container" >
            <div class="row">
                <div class="col-sm-8">
                    <Carousel>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://images.boats.com/resize/1/83/40/8338340_20220601053956456_1_XLARGE.jpg?t=1654011812000&w=1200&h=1200"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://images.boats.com/resize/1/83/40/8338340_20220601054000709_1_XLARGE.jpg?t=1654011812000&w=1200&h=1200"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://images.boats.com/resize/1/83/40/8338340_20220601053951513_1_XLARGE.jpg?t=1654011812000&w=1200&h=1200"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class="col-sm-4">
                    <img
                        className="d-block w-100 border"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8BAQEAAAD8/PwFBQXm5uaJiYn39/fr6+va2trv7+/19fWvr6/Pz8/j4+PGxsaWlpZUVFSkpKS/v7+5ublqamp+fn6SkpLd3d3U1NQ8PDwzMzMjIyNISEh2dnYZGRmDg4MQEBBMTExhYWEsLCyqqqqcnJxAQEB4eHgWFhZjY2MoKChSUlLp15y5AAAMhUlEQVR4nO1dCXeqPBDFSRTFFfcq1t3a5f//vpcFMAmhBY1CeNzvvPPZUiGXmUwyk8nEcWrUqFGjRo0aNWrUqFGjRo0aNXIBIfKP/Ec/Ft2WJwJVmZzzdpkdVuvVYTZ+cyomR0QkN9hhuGHfWlaKI3LaM0ILNxgAAyV7bRfdLJPoEUYNDJxhA2P6A+Bp0c0yBBc575SgAirHedFtMwTkA8YJhg1oABwr0BnJAPhFCGLKiPzjaIQixfBuPUNiRFuMU4PKkWC9OdH/YWZ1yIdR0S18HENuQymt7aXDftUZxf0S4K3g9j2OADBwuxKJi07eFtS2MoZr27vimUuLCLIvURlyTSXEe3YzRKeQICzZzCaC63QYdSLbdYHNM4BhJMKJJEH6cQrUvBIh9q0W4jvwUWGmYeFza2PzuE+0MggN6VLjNnVC+Z7slSFxKNhQAbBxdBZzFWpw8/VNMwQUdkOAi/bqgg0kDauHxF7Y1Sbaq1PuT4HNPsYlZKiXUj8cEs8vbpVJjEOGHe3VPp+vWs2wF9qSofbqBLjDYbOWRpZmrLmGnFE4XPRf3i5TYKMFY/ijuYicTQVGC7QN/d6B5nIndByDlzfMJGZsxMdwdZArX0HkGjdDdvv5k9CB0EyvJ/CrGbIF6DMMYOzl6ChymsBdY/i2WYJONOaTYSHoMAeRL8wQ9/ATQrfjbLWSElLbKKzGBvZo5WkMkQMcWB7FQLS7AY9zw6rnsV9641Okopj0QuuXo64QhoNZuO048/dh0JSwxrArunkGgPxbSB9H5HhcH8MRWS9Bgu6HEB6lxKKPGA7Ifh2loFLEWF2YwWzZogqgMhrfVg8jhkDn41WQH5tikym4DxJJ8sNxYPk4oeJtJqyxAbzbHJzRAlFn8SbCvlMxATLcGNLZNqogw8ltXLTcn0jD9L9iqA+g2o6eYGlsDq+l4yzI0EKGSLT+eis5FmTYS7lHeRHNoF3kpLb0IjDUhbnDCAAPWZWPLWlRe+Svg/VPK222MhIY6kLEFP355hSs/HEZc968WZx46OuXKRZCP9QttxF+m/ge82655IjoKkvkA6ZE8WnqUMwwmSiEqJDhNnHFnVIxZMkjoievozgXGLbUi4TNTkp/K1cuEaLBT6F1WBvmvQrN3yVuQYdL0YUE2Hol8v/9W/SFtw6CZOPef2PoePIt6Gu6lkdP35T0USrQWUvF6qbI8LFQr/rJDFQYlIbhPNE6LCZ1R8CSj69Cc4tLaYQYKEGYRiPZYP3vhKuav98UTSyC+3vb7wZAWWTYTIjQFMOSEKRm8EkMi2YWQxzuf2ux5tONjeZ326KJxfhQGRKrqTGWsS6DxtI2kpquzWgsBuNER9QNFvDrYJGQIRktyuMne2oLiZAmzUFTwuBbGPFXTQXtHjTUWwSliTgi6txKs2aaMptAIMy8V8nLP9LqDV2ZKo8IiXd+FGfedFrqJf9oKzA8Ja46zb04s6WB/5e0PRuQ425CNeW5eFtNmhMSGGgm5ohnEEWJ7wBfZVHREGgObLcPm5D6Xc1fuEJXha3aevpz+4N/n9mpxQsanROdKIzxow9od0WG2E3+ASE5jcIYV12aWLGg6/He8Hw5T9p0N4UGXcFUAugYUoe3OR2Pz/2SBWky4k+G1sOTGOp6qt1ATltimBxNbAdP1asyQyfMF44YljGo/SiWUjDO3sznNNApi8iwfOPd4+hLDJdFN+cJ6Eu+kX7xxm4I6TRk4mnvHot0TCQZVpHhVOqH1Us3QRJDXMl0k56kpSWKUBhD9RmeJYbadBPLMZYY2ryrMg2XyjMcSQzTEmpsxkJiqE+osRstiWEFKu8kIC32JxNqKoBr5Rm+SwwtLmiSgnjbb8iwTMsupnCsPEMp6Um3vmg9fiSGFdm2JuEgMfSLbs4TsJEYaupIWI8PiWFpUtYMYiUx/Ci6OU/AWmKoScawHqeqM0TfEkPLawnq4AYSw0RCjf1wtxJD2yuaaNDdSww1ufy2w5MZbquXjCEnEsO+eskYbZlhBVMVmsqmmuozrF4yxkDR0pIlYwy78fEi98IsQ5rk55lbZUVkTjl/9DyKpcLwgXQT1o7lu8m5LQpIxzk+tvTeERniRxNq+nQ/oMGZX5untfpvjnN3XSdlB999CTWI95X+ge5tMDmmsj5EN4n4uprO2dBXGN6XUEMf3jlEtdDMWatOWHsM8z3Wd0FKGGrcXx7Zu95OVjCXWNXn9fHYOIZ7SgGFjBjKIrwjoYZ1kDPbjRMelmFuu7dQO4c8wL9LOSYKwztMPXIGBzEdnuiBKYYTgSFV1ekdd54qWnrPYHYOpRfZY3MV+YX3z3dVvOc/fEtKNrkjZQg57kzZXMVqMZmBrGH03qtmXopnRYa5E2oGJ6Xmm1mG6m70/BoyVvph3oSaoVq3D0xq6VBzXBMry5njARflJeVMN5moRfvMpnCqFQX4G5zkUlSVYb50k2lyIy6YTMNdahhiyGcsFo8wpEW0lFOx4OG5rYhmkiHbIdjJoagSQww56iW4dMaX3EptNE7Q1W7VhlxT35ZiabIn1CAv2QfZPT6NxeuQvOYQCwKDn70r7hQtzbG/0E+oKL+FuZUBJK9uinqSvQSpUh0ka0INKz2Edbv1za4jJ4uXRBwzB5TeFYa7bF9DSvjjjpeU6Slj9SHxJvrMT1EZZkwZQs41bcO+0Sxc1bmD42I3n+8W0+wj0pfiAWc/L+BtSh523S2UGj3Y6L4bT3mDcAgvZB/yj8pLyphQIxxktlJfs7mlDxQnUoTPIF3f55Xxss9qfpT2feV4Pn0I3Q/fkBphNmGlRYfcaCs564b0/nnmvR8Kw1ztYweahC85PpLW7H72Pj+JA8MsfpOHfLGMrcIwXyjQ/QiLNgD+Al7XwPTmMOb5YviOLAb5vPFyMOyqDliu+kHtj8h1Iv13z4862+cn8SuunOE4jgoSymsvuxQTBc+yh5Fcp3migz5XojfipdCTW8mAanYZuc+iF3sk5qfBfpn5KS117pxjYtrB0Vtl3dfljobxHYwrYOc0oltol8ekMmKfGK8zHxFEfUNegQhzyVNfynjaGGIHT/N5yFE8sGKUJSaFlDgUb+30z2+yyy3BdQpH0Xd4QvEa5G7B5wtsg3j4ZydUuBk01dsmRIghyDJid49xfIbOv5vsYe4B1qZzOcj9esdIXIIzS576mSFa8qWZPbMDnf9q5xDfamRBI3SbyYs+PnXvG0K3JDxmf1ruH5ObHejrly2i2sH6xzhox8/bib7wIV01jpgEMzaR083mOavfxdjSnjze4Gdb/tLS4UmcDoM0xj/j9JbbPZFk+zELgnvRpQS8Y4qDx6ZIXf2XCNozseyreCh02pNMAq2EBRJuVBceewnig1nd6p7WP4+kAvupo1FV5HgtySekXDcvrcqjON4sztBKrkmh6SqVX/S91SRpUwdzqYAdexe4/cqiu0g8BuDWiuNUauxbawspXTAGfTXfcglwd+orVQbZile+APTjDNUIbxTY8EfDZbvrLYeXI1/K/KMuJoTfO17o99rL4UipSRwRLGA731Fb6lAE1lR7TJekUEBRIchr+L2+MDSxNnoCcTuxeshTOkOMo+/hRBVMHB599XKCjhf8Wbb0j8viS0n7ClPRUxG5mvSogL0mxmcYTEWDgtL8EF2T+sNUPgyqosVl+SHdwqJhguQN4uIqLiGxXuUzwAwPbuqrFL4Kg88nKiqVYJA7J8I0mutshaDvYtiAdQlyib3N0xQVw08ZUvoRmmWs552THumG16LJMZBeskjMtB4HsLX+MoC5hBMmRZMk6UhfqoN02yttVfUHGMKmBDZGwk6fMHEvP7q4XB4BOvyIyk+qpyY0lfDb9p8TTnsM3S8jmkpNzKyUO9uowQnCFdTH+J0mTslUNATVqvEe7tdVHvTYnh/en/NUePRosezOvQiWYA2XUiqohO7izkkcW8oqf61yOgFwR1FAKXsUg/Lbj9wyWlAtupeA+3aZ6PEg3Wlcfv28AfFodyYRcvltJvdsUykOrKmduRACTet4PIbY6iQWPSzBZL7mplWbActPFFrN7a1Hy9Zrl4sgJSJHB/dgNHCs0k4Zod6h6XdSUZlynizrfL9gGiSWOAC+K1SHlgyRc1mKhOAO2TL2ZQBlMrzlDNGR8pObl8pQpGjHp7MRu3OoXkkFKkaf547oT/SyHsysfvHVa5hVSjlvIJblwFYDq1hvL0KXjBo0Ja2iMqRYAt1jXp1RIgEaHq9inesbaFZhdeVHwaap1aZYo0aNGjVq1KhRo8Z/in/wwHRyU7T58QAAAABJRU5ErkJggg=="
                    />
                    <h1 align="center">Boat Owner</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <h3 className='boatPrice'>£ 1,000,000</h3>
                    <h1 className='boatName'>{data.name}</h1>
                </div>
                <div class="col-sm-2">
                    <button type="button" class="btn btn-purchase" onClick={handlePayment}>Purchase</button>
                </div>
                <div class="col-sm-4">
                    <div align="center">
                        <button type="button" class="btn btn-viewing">Schedule a Viewing</button>
                        <button type="button" class="btn btn-contact">Contact Us</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <h6 className='boatDesc'>Description</h6>
                    <p>{data.description}</p>
                    <h6 className='boatDesc'>Specification</h6>
                    <ul>
                        <li>Example 1</li>
                        <li>Example 2</li>
                        <li>Example 3</li>
                    </ul>
                </div>
                <div class="col-sm-4">
                </div>
            </div>
        </div>
    )
}