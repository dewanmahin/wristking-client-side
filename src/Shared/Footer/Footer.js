import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <p className="m-0">East Madison Street,<br /> Baltimore, MD, USA</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <Link className="navbar-brand logo" to="/">Wrist<span style={{color: '#b29466', fontSize: '43px', fontFamily: 'auto'}}>K</span>ing</Link>
                        </div>
                        <div className="col-lg-4 col-12">
                            <p className="m-0">info@example.com<br /> +000 - 123456789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <p className="m-0">Copyright &copy; 2021 wristKing. Designed by <strong><a href="https://github.com/dewan36">Dewan Mahin Chowdhury</a></strong></p>
            </div>
        </div>
    );
};

export default Footer;