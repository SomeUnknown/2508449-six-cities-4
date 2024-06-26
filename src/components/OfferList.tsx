import { FC } from 'react';
import { Offer } from '../types';
import { OfferCard } from './OfferCard';

type OfferListProps = {
  offers?: Offer[];
};

export const OfferList: FC<OfferListProps> = ({ offers }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers &&
        offers.map((offer) => (
          <OfferCard key={`offer-${offer.id}`} {...offer} />
        ))}
  </div>
);
