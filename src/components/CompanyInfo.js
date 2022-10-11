import React from "react"

function CompanyInfo() {

return(
    <div>
        <h5 className="companyInfoHeader">About</h5>
        <h6 className="companyInfoSubHeading">About Website</h6>
        <p className="companyInfoPar">
            Welcome to vote<b className="text-primary">2</b>watch!<br />
            Vote<b className="text-primary">2</b>watch provides best fan powered ranking on 
            just about anything and everything concerning movies. The community of fans and followers rank the items from 
            best to worst. 
        </p>

        <h6 className="companyInfoSubHeading">About Author</h6>
        <p className="companyInfoPar">
            <b>Author's Name and Address</b><br />
            Vote<b className="text-primary">2</b>watch is a website of Mr Olagunju Adeyinka Afeez, 
            located in Nigeria.
        </p>
        <p className="companyInfoPar">
            <b>Phone Number</b><br />
            08132906416
        </p>
        <p className="companyInfoPar">
            <b>Email Address</b><br />
            Adeyinkaolagunju16@gmail.com
        </p>
    </div>
)

}

export default CompanyInfo