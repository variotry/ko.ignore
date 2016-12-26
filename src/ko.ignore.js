/*!
 * Knockout ignore binding.
 * (c) vario
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

ko.bindingHandlers.ignore =
{
	init: function()
	{
		return { controlsDescendantBindings: true };
	}
}