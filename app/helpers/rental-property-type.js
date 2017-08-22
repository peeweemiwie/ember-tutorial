import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
]

export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)){
    return 'Community';
  }
  return 'standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
