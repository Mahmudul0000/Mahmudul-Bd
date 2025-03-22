import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import { Phone, Package } from 'lucide-react-native';

const operators = [
  { id: 1, name: 'Operator A', logo: '🔵' },
  { id: 2, name: 'Operator B', logo: '🟢' },
  { id: 3, name: 'Operator C', logo: '🔴' },
];

const packages = [
  { id: 1, amount: 10, validity: '28 days', data: '1GB/day', calls: 'Unlimited' },
  { id: 2, amount: 20, validity: '56 days', data: '2GB/day', calls: 'Unlimited' },
  { id: 3, amount: 30, validity: '84 days', data: '3GB/day', calls: 'Unlimited' },
];

export default function RechargeScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mobile Recharge</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Phone size={24} color="#64748b" />
          <TextInput
            style={styles.input}
            placeholder="Enter mobile number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>

        <Text style={styles.sectionTitle}>Select Operator</Text>
        <View style={styles.operatorGrid}>
          {operators.map((operator) => (
            <Pressable
              key={operator.id}
              style={[
                styles.operatorItem,
                selectedOperator?.id === operator.id && styles.selectedOperator,
              ]}
              onPress={() => setSelectedOperator(operator)}>
              <Text style={styles.operatorLogo}>{operator.logo}</Text>
              <Text style={styles.operatorName}>{operator.name}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Select Package</Text>
        {packages.map((pkg) => (
          <Pressable
            key={pkg.id}
            style={[
              styles.packageItem,
              selectedPackage?.id === pkg.id && styles.selectedPackage,
            ]}
            onPress={() => setSelectedPackage(pkg)}>
            <View style={styles.packageHeader}>
              <Package size={20} color="#0891b2" />
              <Text style={styles.packageAmount}>${pkg.amount}</Text>
            </View>
            <View style={styles.packageDetails}>
              <Text style={styles.packageValidity}>Validity: {pkg.validity}</Text>
              <Text style={styles.packageData}>Data: {pkg.data}</Text>
              <Text style={styles.packageCalls}>Calls: {pkg.calls}</Text>
            </View>
          </Pressable>
        ))}

        <Pressable
          style={[
            styles.button,
            (!phoneNumber || !selectedOperator || !selectedPackage) &&
              styles.buttonDisabled,
          ]}
          disabled={!phoneNumber || !selectedOperator || !selectedPackage}>
          <Text style={styles.buttonText}>Proceed to Payment</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    backgroundColor: '#0891b2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  form: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1e293b',
  },
  operatorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  operatorItem: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedOperator: {
    backgroundColor: '#e0f2fe',
    borderColor: '#0891b2',
    borderWidth: 2,
  },
  operatorLogo: {
    fontSize: 32,
    marginBottom: 8,
  },
  operatorName: {
    fontSize: 14,
    color: '#1e293b',
    textAlign: 'center',
  },
  packageItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedPackage: {
    backgroundColor: '#e0f2fe',
    borderColor: '#0891b2',
    borderWidth: 2,
  },
  packageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  packageAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0891b2',
    marginLeft: 8,
  },
  packageDetails: {
    gap: 4,
  },
  packageValidity: {
    fontSize: 14,
    color: '#64748b',
  },
  packageData: {
    fontSize: 14,
    color: '#64748b',
  },
  packageCalls: {
    fontSize: 14,
    color: '#64748b',
  },
  button: {
    backgroundColor: '#0891b2',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonDisabled: {
    backgroundColor: '#94a3b8',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});