import { paymentFormular } from "../paymentsFormula";

import PushPayWallet from './PushPayWallet';
import USSD from './USSD';
import Card from './Card';
import Bank from './Bank';

import { ReactComponent as CardImg } from "./img/card.svg";
import { ReactComponent as HashImg } from "./img/hash.svg";
import { ReactComponent as BankImg } from "./img/bank.svg";
import { ReactComponent as WalletImg } from "./img/wallet.svg";


// export const  routes = [
//     {
//       path: "/payment/card",
//       exact: true,
//       sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
//       main: () => <Card />,
//       page: "card",
//       icon: <CardImg style={{ marginRight: ".5rem" }} />
//     },  
//     {
//       path: "/payment/ussd",
//       exact: true,
//       sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
//       main: () => <USSD />,
//       page: "ussd",
//       icon: <HashImg style={{ marginRight: ".5rem" }} />
//     },
//     {
//       path: "/payment/bank",
//       exact: true,
//       sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
//       main: () => <Bank/>,
//       page: "bank",
//       icon: <BankImg style={{ marginRight: ".5rem" }} />
//     },
//     {
//       path: "/payment/wallet",
//       exact: true,
//       sidebar: () => <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount)}</p>,
//       main: () => <PushPayWallet/>,
//       page: "PushPay Wallet",
//       icon: <WalletImg style={{ marginRight: ".5rem" }} />
//     },  
//   ]



  // <>
  // <Switch>
  //     <PaymentLay className="backpay">
  //       <div style={{ width: "616px" }}>
  //         <BackRad className="p-4 overflow-hidden backrad">
  //           <PaymentMethod {...{routes}} />
  //         </BackRad>
  //       </div>
  //     </PaymentLay>
  //    {/* <Route path="/payment/ussd" component={USSD} />
  //     <Route path="/payment/bank" component={Bank} />
  //     <Route path="/payment/wallet" component={PushPayWallet} /> */}
  //   </Switch>