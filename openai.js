import 'dotenv/config'
import {OpenAI}  from 'openai'

export const openAi = new OpenAI({
    maxRetries: 0,
})