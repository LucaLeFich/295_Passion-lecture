import vine from '@vinejs/vine'

const commentValidator = vine.compile(
    vine.object({
        content: vine.string().minLength(1).maxLength(255),
    idUser: vine.number().optional(),
    idBook: vine.number().optional(),
    })
)
export { commentValidator }