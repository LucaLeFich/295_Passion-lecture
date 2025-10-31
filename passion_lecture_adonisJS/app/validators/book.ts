import vine from '@vinejs/vine'

const bookValidator = vine.compile(
    vine.object({
        title: vine.string().minLength(3).maxLength(255),
        numberOfPage: vine.number().min(1),
        pdfLink: vine.string(),
        abstract: vine.string().minLength(10),
        editor: vine.string().minLength(2).maxLength(255),
        editionYear: vine.number().max(new Date().getFullYear()),
        imagePath: vine.string(),
        idCategory: vine.number(),
        idWriter: vine.number(),
    })
)
export default bookValidator