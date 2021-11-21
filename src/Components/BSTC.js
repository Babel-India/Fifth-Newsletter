import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Styles/BSTC.css";
const BSTC = () => {
  return (
    <div id="BSTC" className='bstc'> 
            <h1 className='bstc-head'>Babel Software Testing Certification Champions</h1>
            <h3 className='bstc-intro'>There are always new, grander challenges to confront, and a true winner will embrace each one.</h3>
            <Container>
               <h1 className='bstc-name'>August</h1>

               <table className="bstc-table">
                   <tr>
                       <th>Name</th>
                       <th>Marks</th>
                       <th>Name</th>
                       <th>Marks</th>
                   </tr>
                   <tr>
                       <th>Yash Bhatnagar</th>
                       <th>37</th>
                       <th>Aditya Narayan Pandey</th>
                       <th>37</th>
                   </tr>
                   <tr>
                       <th>Vikas Sharma </th>
                       <th>35</th>
                       <th>Mahaya Zeb Khan</th>
                       <th>34</th>
                   </tr>
                   <tr>
                       <th>Devanshu Khurana</th>
                       <th>33</th>
                       <th></th>
                       <th></th>
                   </tr>
</table>
            </Container>
        </div>
  );
};

export default BSTC;
