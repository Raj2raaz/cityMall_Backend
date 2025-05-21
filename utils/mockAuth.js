export const mockAuth = (req, res, next) => {
  req.user = { id: 'cyberpunk420' }; 
  next();
};
