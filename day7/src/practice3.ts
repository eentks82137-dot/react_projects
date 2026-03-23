const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

console.log('-----------------------------------');

const createAccount = () => {
  let balance = 0;

  return {
    deposit: (amount: number) => {
      balance += amount;
      return balance;
    },

    withdraw: (amount: number) => {
      if (balance >= amount) {
        balance -= amount;
      } else {
        console.log('Insufficient funds');
      }
      return balance;
    },
  };
};

const myAccount = createAccount();

console.log(`100 입금 | ${myAccount.deposit(100)}`); // 100
console.log(`50 출금 | ${myAccount.withdraw(50)}`); // 50
console.log(`100 출금 | ${myAccount.withdraw(100)}`); // Insufficient funds, 50

const createPlaylist = () => {
  let songs: string[] = [];
  return {
    addSong: (song: string) => {
      songs.push(song);
      return songs;
    },
    getList: () => {
      return songs;
    },
  };
};

const playlist = createPlaylist();

console.log(playlist.addSong('Song A')); // ['Song A']
console.log(playlist.addSong('Song B')); // ['Song A', 'Song B']
console.log(playlist.getList()); // ['Song A', 'Song B']
