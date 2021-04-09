/**
 * @author      PoulyCroc <poulycroc.studio@gmail.com>
 */

/**
 * @param {Object} prop
 * @return {Object}
 */
export default (keys, options) => {
  let resProps = {};
  keys.forEach(k => {
    resProps = {
      ...resProps,
      [k]: options
    };
  });
  return resProps;
};
