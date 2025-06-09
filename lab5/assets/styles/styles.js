import { StyleSheet } from "react-native"

const colors = {
  primary: "#6C5CE7",
  secondary: "#00B894",
  success: "#55EFC4",
  background: "#ECEFF1",
  white: "#FFFFFF",
  text: {
    primary: "#2D3436",
    secondary: "#636E72",
    light: "#B2BEC3",
    white: "#FFFFFF"
  },
  border: "#DCDDE1",
  shadow: {
    color: "#2C3A47",
    offset: { width: 0, height: 3 },
    opacity: 0.12,
    radius: 6
  }
}

const spacing = {
  xs: 4,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  xxl: 36
}

const typography = {
  title: {
    fontSize: 26,
    fontWeight: "800"
  },
  subtitle: {
    fontSize: 15,
    color: colors.text.secondary
  },
  body: {
    fontSize: 15,
    lineHeight: 22
  },
  caption: {
    fontSize: 11,
    color: colors.text.light
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.xl,
    shadowColor: colors.shadow.color,
    shadowOffset: colors.shadow.offset,
    shadowOpacity: colors.shadow.opacity,
    shadowRadius: colors.shadow.radius,
    elevation: 3
  },

  title: {
    ...typography.title,
    marginTop: spacing.xl,
    marginBottom: spacing.sm
  },
  subtitle: {
    ...typography.subtitle,
    textAlign: "center",
    marginBottom: spacing.xxl
  },
  body: typography.body,
  caption: typography.caption,

  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 10,
    shadowColor: colors.shadow.color,
    shadowOffset: colors.shadow.offset,
    shadowOpacity: colors.shadow.opacity,
    shadowRadius: colors.shadow.radius,
    elevation: 3
  },
  buttonText: {
    color: colors.text.white,
    fontSize: 17,
    fontWeight: "600",
    marginLeft: spacing.sm
  },

  pathContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
    shadowColor: colors.shadow.color,
    shadowOffset: colors.shadow.offset,
    shadowOpacity: colors.shadow.opacity,
    shadowRadius: colors.shadow.radius,
    elevation: 3
  },
  upButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: spacing.md,
    padding: spacing.sm
  },
  upButtonText: {
    marginLeft: spacing.xs,
    color: colors.primary,
    fontWeight: "600"
  },
  pathText: {
    flex: 1,
    fontSize: 13,
    color: colors.text.secondary
  },
  list: {
    padding: spacing.md
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: spacing.sm,
    padding: spacing.md,
    shadowColor: colors.shadow.color,
    shadowOffset: colors.shadow.offset,
    shadowOpacity: colors.shadow.opacity,
    shadowRadius: colors.shadow.radius,
    elevation: 3
  },
  iconContainer: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md
  },
  itemDetails: {
    flex: 1
  },
  itemName: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: spacing.xs,
    color: colors.text.primary
  },
  itemInfo: {
    fontSize: 13,
    color: colors.text.secondary
  },
  moreButton: {
    padding: spacing.sm
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl
  },
  emptyText: {
    marginTop: spacing.md,
    color: colors.text.secondary,
    fontSize: 15
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.md,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
    borderRadius: 10,
    marginHorizontal: spacing.xs
  },
  folderButton: {
    backgroundColor: colors.secondary
  },
  fileButton: {
    backgroundColor: colors.primary
  },
  actionButtonText: {
    color: colors.text.white,
    fontWeight: "600",
    marginLeft: spacing.sm,
    fontSize: 16
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(30, 30, 30, 0.6)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: spacing.xl,
    width: "92%",
    maxWidth: 420
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: "700",
    marginBottom: spacing.xl,
    textAlign: "center",
    color: colors.text.primary
  },
  inputLabel: {
    marginBottom: spacing.sm,
    fontSize: 15,
    color: colors.text.primary
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: spacing.md,
    marginBottom: spacing.xl,
    fontSize: 15
  },
  modalButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: spacing.sm
  },
  modalButtonText: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: "600"
  },
  modalCancelButton: {
    padding: spacing.md,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border
  },
  modalCancelText: {
    color: colors.text.secondary,
    fontSize: 15
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  fileName: {
    fontSize: 17,
    fontWeight: "600"
  },
  contentContainer: {
    flex: 1,
    padding: spacing.lg
  },
  loadingText: {
    textAlign: "center",
    color: colors.text.light,
    marginTop: spacing.xl
  },

  infoContainer: {
    marginTop: spacing.xxl,
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.xl,
    shadowColor: colors.shadow.color,
    shadowOffset: colors.shadow.offset,
    shadowOpacity: colors.shadow.opacity,
    shadowRadius: colors.shadow.radius,
    elevation: 3
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },
  progressBarContainer: {
    height: 18,
    backgroundColor: colors.border,
    borderRadius: 12,
    marginTop: spacing.xl,
    overflow: "hidden"
  },
  progressBar: {
    height: "100%",
    backgroundColor: colors.primary
  },
  lastUpdated: {
    marginTop: spacing.lg,
    fontSize: 12,
    opacity: 0.6,
    textAlign: "center"
  }
})

export default styles
