import vine from '@vinejs/vine'

const commentValidator = vine.compile(
    vine.object({
        content: vine.string().minLength(1).maxLength(255),
        idUser: vine.number(),
        idBook: vine.number(),
    })
)
export { commentValidator }