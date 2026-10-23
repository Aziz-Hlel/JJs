import BlockTitle from '@/app/components/common/block-title/block-title';
import { teamBlockData } from '@/app/data/data-team';
import { TeamBlockProps, TeamMember } from '@/app/types/common.types';
import { memo } from 'react';
import CardTeam from './cardTeam';
import CardTeamDescription from './cardTeamDescription';

const TeamOneBlock = memo((props: Omit<TeamBlockProps, 'urlImage' | 'altImage'>) => {
  const {
    subtitle = teamBlockData.subtitle,
    title = teamBlockData.title,
    divider = teamBlockData.divider,
    description = teamBlockData.description,
    items = teamBlockData.items as TeamMember[],
    className = '',
    emptyMessage = teamBlockData.emptyMessage,
  } = props;

  // Improved data validation check
  if (!items || items.length === 0) {
    return (
      <div className={`team-block team-block--empty ${className}`}>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`team-block bg-background ${className}`}>
      <div className="team-block__container">
        {/* Info title */}
        <BlockTitle subtitle={subtitle} title={title || ''} divider={divider} />
        {/* Info title */}
      </div>
      {/* Team grid */}
      <div className="team-block__grid">
        {/* Item team description */}
        <CardTeamDescription
          urlImage={teamBlockData.urlImage || ''}
          altImage={teamBlockData.altImage || ''}
          description={description || ''}
        />
        {/*/ Item team description */}
        {/* List Item team */}
        {items.map((item) => (
          <CardTeam key={item.id} name={item.name} position={item.position} image={item.image} social={item.social} />
        ))}
        {/*/ List Item team */}
      </div>
      {/* Team grid */}
    </div>
  );
});

TeamOneBlock.displayName = 'TeamOneBlock'; // Add display name

export default TeamOneBlock;
