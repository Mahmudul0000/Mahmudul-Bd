import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { Phone, Wifi, Tv, Zap, TrendingUp } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const services = [
  { id: 1, name: 'Mobile', icon: Phone, color: ['#0891b2', '#0e7490'] },
  { id: 2, name: 'Internet', icon: Wifi, color: ['#0d9488', '#0f766e'] },
  { id: 3, name: 'DTH', icon: Tv, color: ['#0ea5e9', '#0284c7'] },
  { id: 4, name: 'Electricity', icon: Zap, color: ['#8b5cf6', '#7c3aed'] },
];

const recentTransactions = [
  { id: 1, number: '+1 234 567 8900', amount: 20, date: '2024-02-20' },
  { id: 2, number: '+1 987 654 3210', amount: 50, date: '2024-02-19' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#0891b2', '#0e7490']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hello, User!</Text>
            <Text style={styles.balance}>Balance: $100.00</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80' }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <TrendingUp size={20} color="#ffffff" />
            <Text style={styles.statValue}>$350</Text>
            <Text style={styles.statLabel}>This Month</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <Link key={service.id} href="/recharge" asChild>
              <Pressable>
                <LinearGradient
                  colors={service.color}
                  style={styles.serviceItem}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}>
                  <service.icon color="white" size={24} />
                  <Text style={styles.serviceName}>{service.name}</Text>
                </LinearGradient>
              </Pressable>
            </Link>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {recentTransactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View>
              <Text style={styles.transactionNumber}>{transaction.number}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text style={styles.transactionAmount}>${transaction.amount}</Text>
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
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  balance: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#ffffff',
    opacity: 0.9,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    marginTop: 20,
    padding: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 16,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#ffffff',
    opacity: 0.8,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#1e293b',
    marginBottom: 16,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  serviceItem: {
    width: 160,
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    gap: 12,
  },
  serviceName: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#ffffff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  transactionNumber: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1e293b',
  },
  transactionDate: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#0891b2',
  },
});