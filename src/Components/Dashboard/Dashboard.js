import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../images/policewalihlw.jpg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdOutlineContentCopy } from "react-icons/md";
import './dashbaord.css';

const Dashboard = () => {
    return (
        <>
            <Container className="dashboard">
                <Row>
                    {/*---------------profile----------------*/}
                    <Col className="profile_style">
                        <img className="img_style_two" src={img1} alt="" />
                        <p className="element_style">Block Address:</p>
                        <p className="element_style">Position:</p>
                        <p className="element_style">Station:</p>
                    </Col>

                    {/* -----------------Request Bar-------------------- */}

                    <Col className="information" xs={5}>
                        <h6 className="">Request have received</h6>
                        <div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                            </div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                            </div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                            </div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                            </div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                            </div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                            </div>
                            <div className="request_form mt-2">
                                <div>
                                    <Tippy content="Copy to clipboard">
                                        <button className="tool_tip"><MdOutlineContentCopy className="tool_btn" /></button>
                                    </Tippy>
                                </div>
                                <small className="address_bar">0xf66943bee6f500395fd46fcb9a822b2e23b23cdd
                                </small>
                                <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                                <p className='mt-3 ms-2 text_style'>Dhaka</p>
                                <button className='btn_edit ms-2'>accept</button>
                                
                            </div>
                        </div>
                    </Col>


                    {/* -------------------------------------login list--------------------------------- */}
                    <Col className="logers">
                        <h6>Logged In officer list</h6>
                        <div className="profile_form">


                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                        <div className="profile_form">

                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                        <div className="profile_form">

                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                        <div className="profile_form">

                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                        <div className="profile_form">

                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                        <div className="profile_form">

                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                        <div className="profile_form">

                            <p className='mt-3 ms-2 text_style'>Afroza Akter</p>
                            {/* <button className='btn_edit ms-2'>accept</button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="footer_style">
                        <h4>Users:</h4>
                    </Col>
                    <Col className="footer_style" xs={5}>
                        <form className="reply_style">
                            <div>
                                <label className="label" htmlFor="case_no">Block Address</label>
                                <input className="input_style_two" type="block_address" name="block_address" id="block_address" autoComplete='off' required />
                            </div>
                            <div>
                                <label className="label label_4" htmlFor="case_no">Case No</label>
                                <input className="input_style_two" type="case_no" name="case_no" id="case_no" autoComplete='off' required />
                            </div>
                            <div>
                                <label className="label" htmlFor="case_destail">Case Details</label>
                                <textarea className="text_area" />
                            </div>
                            <button className='btn_edit btn_reply ms-2'>Reply</button>
                        </form>
                    </Col>
                    <Col className="footer_history">
                        <h6>History</h6>
                        <p className="reply_history">accepted Afroza Aketer <small className="minutes">2 minutes ago</small></p>
                        <p className="reply_history">accepted Afroza Aketer <small className="minutes">2 minutes ago</small></p>
                        <p className="reply_history">accepted Afroza Aketer <small className="minutes">2 minutes ago</small></p>
                        <p className="reply_history">accepted Afroza Aketer <small className="minutes">2 minutes ago</small></p>
                        <p className="reply_history">accepted Afroza Aketer <small className="minutes">2 minutes ago</small></p>
                        <p className="reply_history">accepted Afroza Aketer <small className="minutes">2 minutes ago</small></p>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Dashboard;