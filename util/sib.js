// import { ApiClient, ContactsApi, CreateContact } from 'sib-api-v3-sdk'

export const API_KEY = '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'

// export const subscribe = async email => {
//     const defaultClient = ApiClient.instance
//     const apiKey = defaultClient.authentications[ 'api-key' ]
//     apiKey.apiKey = API_KEY

//     const instance = new ContactsApi()
//     const createContact = new CreateContact()

//     createContact.email = email
//     createContact.listIds = [ 2 ]

//     return await instance.createContact(createContact)
// }

export const subscribe = async email => {
    const response = await fetch(
        'https://api.sendinblue.com/v3/contacts',
        {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': API_KEY,
            },
            body: JSON.stringify({
                email: email,
                emailBlacklisted: false,
                smsBlacklisted: false,
                listIds: [ 2 ],
                updateEnabled: false,
            }),
        }
    )

    return response.json()
}