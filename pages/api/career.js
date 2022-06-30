import { CareerMail, newTransport } from '../../util/smtp'

export default async (req, res) => {
    try {
        const gmailClient = newTransport()

        gmailClient.sendMail(
            CareerMail({
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                jobType: req.body.jobType,
                jobRole: req.body.jobRole,
                skills: req.body.skills,
                resume: req.body.resume,
            }),
            (error, info) => {
                if (error) {
                    res.send({
                        status: false,
                        error: error.message,
                    })
                }
                else {
                    res.send({
                        status: true,
                    })
                }
            }
        )
    }
    catch (error) {
        res.send({
            status: false,
            error: error.message,
        })
    }
}