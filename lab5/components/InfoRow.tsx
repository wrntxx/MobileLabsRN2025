import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import styles from '../assets/styles/styles.js';
import { formatBytes } from '../app/utils/fileHelper';

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

export default InfoRow;
