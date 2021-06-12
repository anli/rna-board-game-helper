import {
  BoxProps,
  createBox,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from '@themes';
import {IconButton as IconButtonNative} from 'react-native-paper';

const IconButtonNoVariant =
  createBox<Theme, React.ComponentProps<typeof IconButtonNative>>(
    IconButtonNative,
  );

type Props = VariantProps<Theme, 'iconButtonVariants'> &
  React.ComponentProps<typeof IconButtonNative> &
  BoxProps<Theme>;

export const IconButton = createRestyleComponent<Props, Theme>(
  [createVariant({themeKey: 'iconButtonVariants'})],
  IconButtonNoVariant,
);
