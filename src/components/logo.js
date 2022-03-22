/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Linkalt } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Linkalt
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15
      }}
      {...rest}
    >
      <Image src={src} sx={styles.logo} alt="Flutter Logo" />
    </Linkalt>
  );
}

const styles = {
  logo: {
    width: 70,
    height: 70,
  }
}
