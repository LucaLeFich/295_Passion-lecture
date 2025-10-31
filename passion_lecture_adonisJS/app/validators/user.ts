import vine from '@vinejs/vine'

const userValidator = vine.compile(
  vine.object({
    username: vine.string().minLength(2).maxLength(255),
    password: vine.string().minLength(2).maxLength(255),
    // creationDate: vine.date(),
    isAdmin: vine.boolean(),
  })
)

export { userValidator }
