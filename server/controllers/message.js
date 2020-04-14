const messageRouter = express.Router()
import Message from '../models/message'

messageRouter.get('/', async (req, res) => {
  const messages = await Messages.find({})
  return messages.toJSON()
})
