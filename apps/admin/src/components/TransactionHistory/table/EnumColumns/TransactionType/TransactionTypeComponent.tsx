import { Badge } from '@/components/ui/badge';
import type { TableRowType } from '../../tableDeclarations/typesAndFieldsDeclaration';
import TransactionPointsTextMapping from '@/EnumTextMapping/TransactionPointsMapping';
import { TRANSACTION_TYPE_VARIANTS } from './status-variants';

export type TransactionType = TableRowType['type'];

const TransactionTypeComponent = ({ value }: { value: TransactionType }) => {
  const variant = TRANSACTION_TYPE_VARIANTS[value];

  if (!variant) {
    return null; // or a fallback badge
  }

  const Icon = variant.Icon;
  const textMapping = TransactionPointsTextMapping[value];
  return (
    <Badge variant="outline" className={`rounded-sm cursor-default ${variant.className}`}>
      <Icon className="mr-1 h-4 w-4" />
      {textMapping}
    </Badge>
  );
};

export default TransactionTypeComponent;
