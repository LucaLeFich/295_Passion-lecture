import vine from '@vinejs/vine'
const evaluateValidator = vine.compile(
    vine.object({
        content: vine.number().min(1).max(5),
        idUser: vine.number(),
        idBook: vine.number(),
    })
)
export { evaluateValidator }