const targets = require('./targets.json')

function getRandomWord(words) {
  const word = words[Math.floor(Math.random() * words.length)]
  return word
}

function generateTrashTalk(id) {
  let trashTalk = ''

  // return error notice if collection is empty
  if (!id) {
    return 'Please select an option!'
  }

  target = targets.find(target => target.id === id)
  const title = target.title
  const task = getRandomWord(target.task)
  const phrase = getRandomWord(target.phrase)

  trashTalk = `身為一個${title}，${task}，${phrase}吧`

  return trashTalk
}

module.exports = generateTrashTalk