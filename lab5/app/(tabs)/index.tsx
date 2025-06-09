import { ScrollView } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';
import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import { formatBytes, formatDate } from '../utils/fileHelper';
import styles from "../../assets/styles/styles";

export default function HomeScreen() {
	const [storageInfo, setStorageInfo] = useState({
		totalSpace: 0,
		freeSpace: 0,
		usedSpace: 0,
	});

	useEffect(() => {
		const fetchStorageInfo = async () => {
			try {
				const freeSpace = await FileSystem.getFreeDiskStorageAsync();
				const totalSpace = 64 * 1024 * 1024 * 1024;
				const usedSpace = totalSpace - freeSpace;

				setStorageInfo({ totalSpace, freeSpace, usedSpace });
			} catch (error) {
				console.error('Error fetching storage info:', error);
			}
		};

		fetchStorageInfo();
	}, []);

	type InfoRowProps = {
		label: string;
		value: number;
	};
	
	const InfoRow = ({ label, value }: InfoRowProps) => (
		<ThemedView style={styles.infoRow}>
			<ThemedText type="body">{label}</ThemedText>
			<ThemedText type="body" style={{ fontWeight: '500' }}>
				{formatBytes(value)}
			</ThemedText>
		</ThemedView>
	);
	

	const { totalSpace, freeSpace, usedSpace } = storageInfo;
	const usedPercentage = totalSpace ? (usedSpace / totalSpace) * 100 : 0;

	return (
		<ScrollView style={styles.container}>
			<ThemedView style={styles.content}>
				<ThemedView style={styles.infoContainer}>
					<ThemedText type="title">Інформація про сховище</ThemedText>

					<InfoRow label="Загальний обсяг:" value={totalSpace} />
					<InfoRow label="Вільний простір:" value={freeSpace} />
					<InfoRow label="Зайнятий простір:" value={usedSpace} />

					<ThemedView style={styles.progressBarContainer}>
						<ThemedView
							style={[
								styles.progressBar,
								{ width: `${usedPercentage}%` }
							]}
						/>
					</ThemedView>

					<ThemedText
						type="body"
						style={{
							fontSize: 12,
							opacity: 0.5,
							textAlign: 'center',
							marginTop: 15,
						}}
					>
						Останнє оновлення: {formatDate(new Date())}
					</ThemedText>
				</ThemedView>
			</ThemedView>
		</ScrollView>
	);
}
