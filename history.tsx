import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CheckCircle2, XCircle } from 'lucide-react-native';

const transactions = [
  {
    id: 1,
    number: '+1 234 567 8900',
    amount: 20,
    date: '2024-02-20',
    status: 'success',
    operator: 'Operator A',
  },
  {
    id: 2,
    number: '+1 987 654 3210',
    amount: 50,
    date: '2024-02-19',
    status: 'success',
    operator: 'Operator B',
  },
  {
    id: 3,
    number: '+1 555 123 4567',
    amount: 30,
    date: '2024-02-18',
    status: 'failed',
    operator: 'Operator C',
  },
];

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction History</Text>
      </View>

      <View style={styles.content}>
        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionNumber}>{transaction.number}</Text>
              {transaction.status === 'success' ? (
                <CheckCircle2 size={20} color="#10b981" />
              ) : (
                <XCircle size={20} color="#ef4444" />
              )}
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionOperator}>{transaction.operator}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <View style={styles.transactionFooter}>
              <Text
                style={[
                  styles.transactionStatus,
                  transaction.status === 'success'
                    ? styles.statusSuccess
                    : styles.statusFailed,
                ]}>
                {transaction.status.toUpperCase()}
              </Text>
              <Text style={styles.transactionAmount}>${transaction.amount}</Text>
            </View>
          </View>
        ))}
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
  content: {
    padding: 20,
  },
  transactionItem: {
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
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  transactionDetails: {
    marginBottom: 8,
  },
  transactionOperator: {
    fontSize: 14,
    color: '#64748b',
  },
  transactionDate: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  transactionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusSuccess: {
    backgroundColor: '#dcfce7',
    color: '#10b981',
  },
  statusFailed: {
    backgroundColor: '#fee2e2',
    color: '#ef4444',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0891b2',
  },
});