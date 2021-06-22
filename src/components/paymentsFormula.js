/* *
 This function handles all the charges needed to generate a payment amount for a transaction.
 *
 * Formula is explained below
 *
 * * Terms:
 * * Cap (Max amount you can charge for a transaction)
 *
 * * Formula
 *
 * * Pushpay paystack charges (Card & Bank) = 0.5% (To Cap @2000)
 * 
 * * Pushpay ussd charges:
 * * * Below N5000 = N30
 * * * From N5000 = N50
 * * * From N50,000 = N100
 *
 * * Paystack: To Cap @2000
 * * Transactions Below N2500 = 1.5% + pushpay paystack charges
 * * Transactions Above N2500 = 1.5% + 100 + pushpay paystack charges
 *
 * * USSD: To Cap @1500
 * * All transactions = 1% + pushpay ussd charges
 *3
 * * Wallet: reference the pushpay ussd charges
 */  
// FINAL_CHARGES, FINAL_API_PROVIDER_CHARGES, FINAL_PUSHPAY_CHARGES

function pushPayUSSD(amount) { 
    if (amount < 5000) return 30;
    if (amount >= 5000 && amount < 50000) return  50;
    if (amount >= 50000) return 100; 
}
function payment(amount, channel) {
    
    let initialPayment = parseFloat(amount);
    let availableChannels = ['card', 'ussd', 'bank', 'wallet'];
    let pushpayCharge = 0;
    let paystackCharge = 0;
    let totalCharges = 0;
    let Cap = 0;

    if (!availableChannels.includes(channel)) {
        return ('The channel you selected is not available');
    }
    else{

        if (channel === 'bank' || channel === 'card' ) {
             Cap = 2000;
            if (initialPayment < 2500) {
                 pushpayCharge = Math.ceil((0.5/100) * initialPayment);
                 paystackCharge = Math.ceil((1.5/100) * initialPayment);
                
                 totalCharges = Math.ceil(initialPayment + pushpayCharge + paystackCharge);
                return {initialPayment, totalCharges, pushpayCharge, paystackCharge, channel}
             }
            if (initialPayment >= 2500) {
                 pushpayCharge = Math.ceil((0.5/100) * initialPayment);
                 paystackCharge = Math.ceil((1.5/100) * initialPayment + 100);
                
                if (paystackCharge > Cap) paystackCharge = Cap;

                if (pushpayCharge > Cap) pushpayCharge = Cap;

                totalCharges = Math.ceil(initialPayment + pushpayCharge + paystackCharge);

                return {initialPayment, totalCharges, pushpayCharge, paystackCharge, channel}
            }
        }

        if (channel === 'ussd' ) {
             Cap = 1500; 
             pushpayCharge = (1/100) * initialPayment + pushPayUSSD(initialPayment);

             if (pushpayCharge > 1500) pushpayCharge = Cap;
             totalCharges = initialPayment + pushpayCharge;

             return { initialPayment, totalCharges, pushpayCharge, channel}
        }

        if (channel == 'wallet') {
            pushpayCharge = pushPayUSSD(initialPayment);
            totalCharges =  initialPayment + pushpayCharge;
            return { initialPayment, totalCharges, pushpayCharge, channel}
        }

    }
}

console.log(payment(160000, 'bank'));