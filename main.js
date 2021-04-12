/**
 * @author      PoulyCroc <poulycroc.studio@gmail.com>
 */

/**
 * @param {Array} keys
 * @param {Object} options
 * @return {Object}
 */
module.exports = (keys, options = {}) => {
  let resProps = {};
  keys.forEach(k => {
    resProps = {
      ...resProps,
      [k]: options
    };
  });
  return resProps;
};
