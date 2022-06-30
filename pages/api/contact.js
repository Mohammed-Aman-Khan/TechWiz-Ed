import { ContactMail, newTransport } from '../../util/smtp'

export default async (req, res) => {
    try {
        const gmailClient = newTransport()

        gmailClient.sendMail(
            ContactMail({
                email: req.body.email,
                name: req.body.name,
                phone: req.body.phone,
                querySubject: req.body.querySubject,
                queryDescription: req.body.queryDescription,
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