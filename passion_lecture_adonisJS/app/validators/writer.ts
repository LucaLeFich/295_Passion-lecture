import vine from '@vinejs/vine'

const writerValidator = vine.compile(
  vine.object({
    firstname: vine.string().minLength(2).maxLength(255),
    name: vine.string().minLength(2).maxLength(255),
  })
)

export { writerValidator }
