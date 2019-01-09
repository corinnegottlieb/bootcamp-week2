// const setCounter = function (num) {
//     let counter = 0

//     const count = function () {
//       counter += num;
//       console.log(counter)
//     }

//     return count
//   }

//   const increment = setCounter(2)
//   increment()
//   increment()

// const family = function (){
//     const members = []
//     const birth = function (name) {
//         members.push(name)
//         console.log(members)
//     }
//  return birth
// }

// const giveBirth = family()
// giveBirth("Bob")
// giveBirth("Sue")


// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }

// const m = mathOperations()
// console.log(m.add(13,29))
// console.log(m.mult(1.75, 24))
// console.log(m.mult(7,m.div(36, 6)))

// const func = function(x){
//     let rand = 43
//     const addition  = function(x) {
//         return rand+= x;
//     }
//     const subtraction = function(y) {
//         return rand -= y
//     }
//     return {
//         addition: addition,
//         subtraction: subtraction
//     }
// }

// let bank = func()

// const use1 = function (x, y){
//    return bank.addition * 2;
// }

// const use2 = function (x,y){ 
//     return func(x,y)* 100
// }

// console.log(use1(1, 2))
// console.log(use2(1,2))

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()
// usersModule.addUser('Sam')
// usersModule.addUser('Bob')
// usersModule.listUsers()

// console.log(userModule._users)

// Excercise 1



// const StringFormatter = function (){
//   const capitalizeFirst  = function(string){
//     var newString = string.substring(0,1).toUpperCase() + string.substring(1).toLowerCase()
//     console.log(newString)
//   }

//   const skewerCase = function(string){
//       var newString = string.replace(" ", "-")
//       console.log(newString)}


//   return {capitalizeFirst : capitalizeFirst,
// skewerCase: skewerCase};
// }



// const formatter = StringFormatter();
// formatter.capitalizeFirst("dorothy")
// formatter.skewerCase("blue box")

// excercise 2

// const Bank = function(){
//    money = 500;

//    const depositCash = function (cash){
//        money += cash
//    }

//    const checkBalance = function(){
//        console.log(money)
//    }
//    return {
//        deposit: depositCash,
//        showBalance: checkBalance
//    }
// }

// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance()



// Excercise 3

const SongsManager = function () {
    const songs = {}
    const youtube = "https://www.youtube.com/watch?v="

    const extractIdentifier = url => url.split("").splice(32).join("")
    const getUrl = identifier => youtube + identifier
    const addSong = (name, url) => songs[name] = extractIdentifier(url)
    const getSong = name => console.log(getUrl(songs[name]))
    return {
        addSong: addSong,
        getSong: getSong
    }
}

    const songsManager = SongsManager()
    songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
    songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
    songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

    songsManager.getSong("sax")