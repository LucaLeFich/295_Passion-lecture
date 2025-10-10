import vine from '@vinejs/vine'

const categoriesValidator = vine.compile(
    vine.object({
        label: vine.string().minLength(2).maxLength(255).notSameAs("")
    })
)
export { categoriesValidator }