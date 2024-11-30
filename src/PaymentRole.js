import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import moment from 'moment/moment';
import logo from '../src/images/image.png';
import sign from '../src/images/sign.png';
// import devider from '@mui/material';
// import {Divider} from 'react';

const PaymentRole = () => {
    const [formData, setFormData] = useState({
        employeeName: '',
        position: '',
        startDate: '',
        endDate: '',
        companyName: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  
  const CustomDivider = () => (
    <div style={{ margin: '20px 0' }}>
        <div style={{
            borderBottom: '1px solid black',
            marginBottom: '2px'
        }} />
        <div style={{
            borderBottom: '1px solid #32CD32	'
        }} />
    </div>
);
    const handleGenerateLetter = () => {
        const input = document.getElementById('letterContent');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save(`${formData.employeeName}_Experience_Letter.pdf`);
            });
    };

    return (
        <div>
            <h2>Experience Letter Generator</h2>
            <form>
                <div>
                    <label>Employee Name:</label>
                    <input
                        type="text"
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Position:</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Company Name:</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Additional Information:</label>
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleGenerateLetter}>
                    Generate Letter
                </button>
            </form>

            <div id="letterContent" style={{ marginTop: '20px',  fontFamily: "GTWalsheimPro",}}>
                <h3>Generated Experience Letter</h3>
                <div style={{ border: '1px solid black', textAlign:"left",padding: '20px', marginTop: '20px',marginLeft:"20px",marginRight:"200px",width:"450px",height:"600px"}}>
                    <img style={{width:"250px",}} src={logo}></img>
                    <p style={{textAlign:"right"}}>{moment(new Date()).format("DD-MMM-yyyy")}</p>
                    <p style={{textAlign:"center"}}>To Whomsoever it may concern,</p>
                    <p>This is to certify that Ms.{formData.employeeName}, Employee Id ZFS59 was employed with {formData.position} from {formData.startDate?moment(formData.startDate).format("DD-MMM-yyyy"):""} to {formData.endDate?moment(formData.endDate).format("DD-MMM-yyyy"):""}.</p>
                    {/* <p>During their tenure, {formData.employeeName} exhibited excellent performance and professionalism. {formData.additionalInfo}</p> */}
                    <p>Ms.{formData.employeeName} worked as a trainee with a company from {formData.startDate?moment(formData.startDate).format("DD-MMM-yyyy"):""} to {formData.endDate?moment(formData.endDate).format("DD-MMM-yyyy"):""} post which she was onboarded as a Software Developer Her Last working Day with the company was {formData.endDate?moment(formData.endDate).format("DD-MMM-yyyy"):""}.</p>
                    {/* <p>We wish them all the best in their future endeavors.</p> */}
                    <p>Her contributions to the organization and its success will always be appreciated. We wish her all the 
best for her future endeavours.</p>
<p>
Feel free to contact us for any further information.</p>
                    {/* <p>Sincerely,</p>
                    <p>[Your Name]</p>
                    <p>[Your Position]</p> */}
                    <p style={{textAlign:"left"}}>For <strong>{formData.companyName}</strong></p>
                    <img style={{width:"100px",marginTop:"70px"}} src={sign}></img>
                    <p><strong>Prabhadevi SelvaRaju</strong></p>
                    <p style={{marginTop:"-10px"}}>Human Resources</p>
                    <CustomDivider style={{marginLeft:"0px"}}/>
                    <p style={{fontSize:"10px",textAlign:"center"}}>
+91 22 2088 7714, +91 8433727714 | <a href="team@zoifintech.com">team@zoifintech.com</a> | <a href="www.zoifintech.com">www.zoifintech.com</a> |  <a href="www.TrakZo.ai">www.TrakZo.ai</a>

1603/16, Lilium, Vasant Oasis, Makwana Road, Marol, Andheri East, Mumbai, Maharashtra, India - 400 059</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentRole;

