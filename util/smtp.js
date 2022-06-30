import nodemailer from 'nodemailer'

export const newTransport = () => nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "techwized@gmail.com",
        pass: "oducvdxjoqsofljv",
    }
})

const mailList = [
    'techwized@gmail.com',
    'srinivasanm329@gmail.com',
    'mskoushik98@gmail.com',
    'sreenivasasetty66@gmail.com',
]

export const ContactMail = ({
    email,
    name,
    phone,
    querySubject,
    queryDescription,
}) => {
    return {
        from: 'techwized@gmail.com',
        to: mailList,
        subject: 'New Contact Query - Techwiz Ed',
        html: `<div>
            <p>
                Name: <em>${ name }</em>
                <br>
                Email: <em>${ email }</em>
                <br>
                Phone: <em>${ phone }</em>
                <br>
                Subject: <em>${ querySubject }</em>
                <br>
                Description: <em>${ queryDescription }</em>
            </p>
        </div>`,
    }
}

export const CareerMail = ({
    email,
    name,
    phone,
    jobType,
    jobRole,
    skills,
    resume,
}) => {
    return {
        from: 'techwized@gmail.com',
        to: mailList,
        subject: 'New Job Application - Techwiz Ed',
        html: `<div>
            <p>
                Name: ${ name }
                <br>
                Email: ${ email }
                <br>
                Phone: ${ phone }
                <br>
                Job Type: ${ jobType }
                <br>
                Job Role: ${ jobRole }
                <br>
                Skills: ${ skills }
                <br>
                Resume Link: ${ resume }
                <br>
            </p>
        </div>`,
    }
}