const shimmer = `
  <svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="900" fill="#EFE7DA"/>
    <rect y="320" width="1200" height="260" fill="#F7F1E8"/>
    <rect y="640" width="1200" height="140" fill="#E8DECE"/>
  </svg>
`;

export const productBlurDataURL = `data:image/svg+xml;base64,${Buffer.from(shimmer).toString("base64")}`;
