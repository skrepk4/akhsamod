const bankAccount = {
    ownerName: "Микита",
    accountNumber: "84732903",
    balance: 2000,
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Ви поповнили рахунок на ${amount} грн. Поточний баланс: ${this.balance} грн.`);
      } else {
        console.log("Сума поповнення має бути більшою за 0.");
      }
    },
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Ви зняли ${amount} грн. Поточний баланс: ${this.balance} грн.`);
      } else if (amount > this.balance) {
        console.log("Недостатньо коштів на рахунку.");
      } else {
        console.log("Сума зняття має бути більшою за 0.");
      }
    }
  };
  
  document.getElementById("depositBtn").addEventListener("click", function() {
    const amount = parseFloat(prompt("Введіть суму для поповнення:"));
    bankAccount.deposit(amount);
  });
  
  document.getElementById("withdrawBtn").addEventListener("click", function() {
    const amount = parseFloat(prompt("Введіть суму для зняття:"));
    bankAccount.withdraw(amount);
  });
  

  const weather = {
    temperature: -5,
    humidity: 80,
    windSpeed: 10, 
  
    isBelowZero() {
      return this.temperature < 0;
    }
  };

console.log(weather.isBelowZero());


const user = {
    name: "Даніїл",
    email: "iphoneservice575@gmail.com",
    password: "1234dog5678cat",

login(inputEmail, inputPassword) {
     return this.email === inputEmail && this.password === inputPassword;
    }
  };

  const inputEmail = "iphoneservice575@gmail.com";
  const inputPassword = "1234dog5678cat";
  
  if (user.login(inputEmail, inputPassword)) {
    console.log("Логін успішний!");
  } else {
    console.log("Неправильний email або пароль.");
  }

const movie = {
    title: "vennm",
    director: "Bill Gates",
    year: "2009",
    rating: 8.7,

    isHighRated() {
        return this.rating > 8;
      }
}   
  if (movie.isHighRated()) {
      document.getElementById("movieTitle").style.color = "green";
    }

