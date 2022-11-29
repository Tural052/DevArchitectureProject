using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Scaffolding.Internal;

using System;

namespace WebAPI.EntityBaseOverride
{
    /// <summary>
    ///
    /// </summary>
    public class OverrideBase : CSharpEntityTypeGenerator
    {

#pragma warning disable CS1572 // XML comment has a param tag for 'cSharpHelper', but there is no parameter by that name
        /// <summary>
        ///
        /// </summary>
        /// <param name="annotationCodeGenerator"></param>
        /// <param name="cSharpHelper"></param>
#pragma warning disable CS1573 // Parameter 'CSharpHelper' has no matching param tag in the XML comment for 'OverrideBase.OverrideBase(IAnnotationCodeGenerator, ICSharpHelper)' (but other parameters do)
        public OverrideBase(IAnnotationCodeGenerator annotationCodeGenerator, ICSharpHelper CSharpHelper)
#pragma warning restore CS1573 // Parameter 'CSharpHelper' has no matching param tag in the XML comment for 'OverrideBase.OverrideBase(IAnnotationCodeGenerator, ICSharpHelper)' (but other parameters do)
#pragma warning restore CS1572 // XML comment has a param tag for 'cSharpHelper', but there is no parameter by that name
            : base(annotationCodeGenerator, CSharpHelper)
        {
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="entityType"></param>
        /// <param name="namespace"></param>
        /// <param name="useDataAnnotations"></param>
        /// <returns></returns>
        public override string WriteCode(IEntityType entityType, string @namespace, bool useDataAnnotations)
        {
            var str = base.WriteCode(entityType, @namespace, useDataAnnotations).Replace(
                "public partial class " + entityType.Name, "public class " + entityType.Name + " : IEntity");
            var oldValue = "using System;";
            var newValue = oldValue + Environment.NewLine + "using Core.Entities;";
            return str.Replace(oldValue, newValue);
        }
    }
}