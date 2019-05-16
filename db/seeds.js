const User = require('../api/userAPI')
const mongoose = require('../db/connection')

// using async/await
const saved = async () => {
  await User.UserCollection.deleteMany()
  const david = new User.UserCollection({name: 'David Clarke'})
  await david.save()
  const kelley = new User.UserCollection({name: 'Jacquelle Blythe'})
  await kelley.save()
}

saved()