import React, {Component} from 'react';
import {Signin} from './auth/signin';

class Header extends Component {

    render(){

        return (

            <div>
                <nav className="navbar navbar-preflight">

                    <ul className="nav navbar-nav">

                        <li className="nav-item">


                            <Signin/>
                        </li>


                    </ul>
                </nav>



            </div>



        );





    }


}

export default Header