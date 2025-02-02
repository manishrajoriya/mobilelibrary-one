import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from "react-native";

const WhatsAppMessageScreen: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = async () => {
    if (!message.trim()) {
      Alert.alert("Error", "Please enter a message.");
      return;
    }

    // Format the message for WhatsApp
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;

    try {
      // Check if WhatsApp is installed
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "WhatsApp is not installed on your device.");
      }
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      Alert.alert("Error", "Failed to open WhatsApp.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Message to WhatsApp</Text>

      {/* Message Input */}
      <TextInput
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        multiline
        numberOfLines={4}
      />

      {/* Send Button */}
      <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send via WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
    textAlignVertical: "top", // For multiline input
  },
  sendButton: {
    backgroundColor: "#25D366", // WhatsApp green color
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default WhatsAppMessageScreen;


// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import React from 'react'
// import RazorpayCheckout from 'react-native-razorpay';
// import { env } from 'process';


// const Pricing = () => {

  

//   const razorpay_key = "rzp_test_lhWJ5AoswKGJwh"
//   const razorpay_key_secret = "9HYlGDmtXffM1uVzyI8rymcx"
//   // console.log(razorpay_key);

//   let amount = 5000;
  
//   // if (!razorpay_key) {
//   //   throw new Error("Razorpay key is not defined");
//   // }

//    var options = {
//     description: 'Credits towards consultation',
//     image: "https://i.imgur.com/3g7nmJC.jpg",
//     currency: 'INR',
//     key: razorpay_key,
//     amount: amount*100,
//     name: 'Acme Corp',
//     order_id: '',//Replace this with an order_id created using Orders API.
//     prefill: {
//       email: 'gaurav.kumar@example.com',
//       contact: '8764296129',
//       name: 'Gaurav Kumar'
//     },
//     theme: {color: '#53a20e'}
//   };

// const handlePayment = (options : any) => {
//   console.log(options);
  
//    RazorpayCheckout.open(options).then((data) => {
//     // handle success
//     alert(`Success: ${data.razorpay_payment_id}`);
//   }).catch((error) => {
//     // handle failure
//     alert(`Error: ${error.code} | ${error.description} | ${error}`);
//   });

//   }

//   return (
//     <View>
//       <TouchableOpacity style={styles.button} onPress={() => {handlePayment(options)}}>
//         <Text style={styles.buttonText}>Pay Now</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Pricing

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 8,
//     backgroundColor: '#007bff',
//   },
//   buttonText: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },
// })