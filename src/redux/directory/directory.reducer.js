const INITIAL_STATE = {
  sections: [
    {
      title: 'driveways',
      imageUrl: 'https://i.ibb.co/pfvb7L9/driveway1.jpg',
      id: 1,
      linkUrl: 'projects/driveways',
      imageNumber: 1,
    },
    {
      title: 'patios',
      imageUrl: 'https://i.ibb.co/mTTV1Sz/patio77.jpg',
      id: 2,
      linkUrl: 'projects/patios',
      imageNumber: 2,
    },
    {
      title: 'outdoor living',
      imageUrl: 'https://i.ibb.co/L6L9Y5y/outdoor-kitchen3.jpg',
      id: 3,
      linkUrl: 'projects/outdoorliving',
      imageNumber: 3,
    },
    {
      title: 'fire pits',
      imageUrl: 'https://i.ibb.co/Yy9r6BL/firepit7.jpg',
      id: 4,
      linkUrl: 'projects/firepits',
      imageNumber: 4,
    },
    {
      title: 'pool patios',
      imageUrl: 'https://i.ibb.co/7QCC6t4/pool-patio8.jpg',
      id: 5,
      linkUrl: 'projects/poolpatios',
      imageNumber: 5,
    },
    {
      title: 'steps',
      imageUrl: 'https://i.ibb.co/sv6V3Ns/steps2.jpg',
      id: 6,
      linkUrl: 'projects/steps',
      imageNumber: 6,
    },
    {
      title: 'stoops',
      imageUrl: 'https://i.ibb.co/9ZWsfZ0/stoop5.jpg',
      id: 7,
      linkUrl: 'projects/stoops',
      imageNumber: 7,
    },
    {
      title: 'veneer',
      imageUrl: 'https://i.ibb.co/VNyjLzt/veneer4.jpg',
      id: 8,
      linkUrl: 'projects/veneer',
      imageNumber: 8,
    },
    {
      title: 'walkways',
      imageUrl: 'https://i.ibb.co/S5p4DZH/walkway3.jpg',
      id: 9,
      linkUrl: 'projects/walkways',
      imageNumber: 9,
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
