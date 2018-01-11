var config = require('../../server/config.json');
var path = require('path');

module.exports = function(user) {
  //send verification email after registration
  console.log('> user.afterRemote triggered');
  user.afterRemote('create', function(context, userInstance, next) {

    var options = {
      type: 'email',
      to: userInstance.email,
      from: 'postmaster@localhost',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    userInstance.verify(options, function(err, response, next) {
      if (err) return next(err);

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' -
            'before logging in.',
        redirectTo: '/User/Login',
        redirectToLinkText: 'Log in'
      });
    });
  });
}
