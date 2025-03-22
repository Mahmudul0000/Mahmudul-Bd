import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import {
  User,
  Bell,
  Shield,
  HelpCircle,
  ChevronRight,
  Moon,
} from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <User size={24} color="#64748b" />
              <Text style={styles.menuItemText}>Profile</Text>
            </View>
            <ChevronRight size={20} color="#64748b" />
          </Pressable>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Bell size={24} color="#64748b" />
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
            <Switch value={true} />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Moon size={24} color="#64748b" />
              <Text style={styles.menuItemText}>Dark Mode</Text>
            </View>
            <Switch value={false} />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Shield size={24} color="#64748b" />
              <Text style={styles.menuItemText}>Privacy & Security</Text>
            </View>
            <ChevronRight size={20} color="#64748b" />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <HelpCircle size={24} color="#64748b" />
              <Text style={styles.menuItemText}>Help & Support</Text>
            </View>
            <ChevronRight size={20} color="#64748b" />
          </Pressable>
        </View>

        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
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
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#1e293b',
    marginLeft: 12,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});