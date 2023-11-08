import PropTypes from "prop-types";
import { colors } from "../constants/colors";

function BadgeColor(props) {
  const { color } = props;

  const hex = colors.find((item) => item.id === color).hex;

  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: 9999,
        backgroundColor: hex,
        marginRight: 4,
      }}
    />
  );
}

BadgeColor.propTypes = {
  color: PropTypes.string.isRequired,
};

export { BadgeColor };
