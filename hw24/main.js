document.addEventListener("DOMContentLoaded", () => {
    // Currency converter
    {
        const converter = createCurrencyConverter(0.89); 

        function createCurrencyConverter(rate) {
            let targetCurrency = 'USD';

            return function (amountWithCurrency) {
                const [amount, currency] = amountWithCurrency.split(' ');
                const sanitizedCurrency = currency ? currency.toUpperCase() : '';
                
                if (sanitizedCurrency === 'USD') {
                    const amountInForeignCurrency = parseFloat(amount) * rate;
                    return `${amountInForeignCurrency.toFixed(2)} EUR`;
                } else if (sanitizedCurrency === 'EUR') {
                    const amountInLocalCurrency = parseFloat(amount) / rate;
                    return `${amountInLocalCurrency.toFixed(2)} USD`;
                } else {
                    return 'Invalid currency';
                }
            };
        }
        
        const amountInput = document.getElementById('amountInput');
        const resultSpan = document.getElementById('result');

        amountInput.addEventListener('input', () => {
            const userInput = amountInput.value.trim();

            if (userInput.length > 0) {
                const result = converter(userInput);
                resultSpan.textContent = result;
            } else {
                resultSpan.textContent = 'will be result';
            }
        });
    };

    // Deposit investment simulator
    {
        const submitDeposit = document.getElementById("deposit");
        const submitWithdraw = document.getElementById("withdraw")
    
        function createInvestmentAccount(initialAmount, annualInterestRate) {
            let balance = initialAmount;
            let interestRate = annualInterestRate / 100;
            let totalProfit = 0;
    
            const depositInput = document.getElementById("depositInput");
            const withdrawInput = document.getElementById("withdrawInput");
            const balanceAmount = document.getElementById("balanceAmount");
            const rate = document.getElementById("rate");
            const profitYearElem = document.getElementById("profitYear");
            const totalProfitElem = document.getElementById("totalProfit");
    
            depositInput.addEventListener("input", function () {
                pendingDeposit = parseFloat(depositInput.value) || 0;
            });
    
            withdrawInput.addEventListener("input", function () {
                pendingDeposit = parseFloat(withdrawInput.value) || 0;
            });
    
            submitDeposit.addEventListener("click", () => { 
                myAccount.deposit(pendingDeposit);
                myAccount.getAccountInfo();
                pendingDeposit = 0;
                depositInput.value = 0;
            });
    
            submitWithdraw.addEventListener("click", () => { 
                myAccount.withdraw(pendingDeposit);
                myAccount.getAccountInfo();
                pendingDeposit = 0;
                withdrawInput.value = 0;
            });         
    
            return {
                deposit: function (amount) {
                    if (amount > 0) {
                        balance += amount;
                        console.log(`Deposited ${amount} USD into the account.`);
                    } else {
                        console.log('Invalid amount for deposit.');
                    }
                },
    
                withdraw: function (amount) {
                    if (amount > 0 && amount <= balance) {
                        balance -= amount;
                        console.log(`Withdrawn ${amount} USD from the account.`);
                    } else {
                        console.log('Invalid amount for withdrawal or insufficient funds in the account.');
                    }
                },
    
                calculateProfit: function (years) {
                    const compoundInterest = balance * Math.pow(1 + interestRate, years) - balance;
                    totalProfit += compoundInterest;
                    return compoundInterest;
                },
    
                getAccountInfo: function () {
                    balanceAmount.textContent = `${balance.toFixed(2)} USD`;
                    profitYearElem.textContent = `Profit for 1 year: ${myAccount.calculateProfit(1).toFixed(2)} USD`;
                    rate.textContent = `Annual Interest Rate: ${annualInterestRate}%`;
                    totalProfitElem.textContent = `Total Profit: ${myAccount.calculateProfit(1).toFixed(2)*2} USD (for all years)`;

                    return `Balance: ${balance.toFixed(2)} USD\nAnnual Interest Rate: ${annualInterestRate}%\nTotal Profit: ${totalProfit.toFixed(2)} USD.`;
                }
            };
        }
    
        const myAccount = createInvestmentAccount(1000, 5);
        console.log(myAccount.calculateProfit(1).toFixed(2));
        console.log(myAccount.getAccountInfo()); 
    };
});
